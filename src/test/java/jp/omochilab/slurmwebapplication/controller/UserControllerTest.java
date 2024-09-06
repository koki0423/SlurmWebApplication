package jp.omochilab.slurmwebapplication.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import jp.omochilab.slurmwebapplication.model.Role;
import jp.omochilab.slurmwebapplication.model.User;
import jp.omochilab.slurmwebapplication.repository.RoleRepository;
import jp.omochilab.slurmwebapplication.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UserController.class)
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserRepository userRepository;

    @MockBean
    private RoleRepository roleRepository;

    @MockBean
    private PasswordEncoder passwordEncoder;

    private ObjectMapper objectMapper = new ObjectMapper();

    @BeforeEach
    void setUp() {
        // テスト用のセットアップ
        Role userRole = new Role();
        userRole.setRoleId(1);
        userRole.setRoleName("USER");

        // ロールリポジトリをモック化して、"USER"を返す
        Mockito.when(roleRepository.findByRoleName("USER")).thenReturn(Optional.of(userRole));

        // パスワードエンコーダーのモック
        Mockito.when(passwordEncoder.encode(any())).thenReturn("hashedPassword");
    }

    @Test
    @WithMockUser(username = "admin", roles = {"ADMIN"}) // 認証済みユーザーをモック
    void testRegisterUser() throws Exception {
        // モックでのユーザー作成
        User user = new User();
        user.setUserName("testuser");
        user.setEmail("testuser@example.com");
        user.setPasswordHash("plainPassword");

        // モック化されたリポジトリがユーザーを保存
        Mockito.when(userRepository.save(any(User.class))).thenReturn(user);

        // JSONでのリクエスト + CSRFトークンを追加
        mockMvc.perform(MockMvcRequestBuilders.post("/api/users/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .param("role", "USER")
                        .content(objectMapper.writeValueAsString(user))
                        .with(csrf()))  // CSRFトークンを付与
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").value("User registered successfully!"));
    }
}

