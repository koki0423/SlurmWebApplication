package jp.omochilab.slurmwebapplication.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import jp.omochilab.slurmwebapplication.model.User;
import jp.omochilab.slurmwebapplication.model.Role;
import jp.omochilab.slurmwebapplication.repository.UserRepository;
import jp.omochilab.slurmwebapplication.repository.RoleRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.Optional;
import java.util.Set;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;

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
        userRole.setRoleName("ROLE_USER");

        // ロールリポジトリをモック化して、"ROLE_USER"を返す
        Mockito.when(roleRepository.findByRoleName("ROLE_USER")).thenReturn(Optional.of(userRole));

        // パスワードエンコーダーのモック
        Mockito.when(passwordEncoder.encode(any())).thenReturn("hashedPassword");
    }

    @Test
    void testRegisterUser() throws Exception {
        // モックでのユーザー作成
        User user = new User();
        user.setUserName("testuser");
        user.setEmail("testuser@example.com");
        user.setPasswordHash("plainPassword");

        // モック化されたリポジトリがユーザーを保存
        Mockito.when(userRepository.save(any(User.class))).thenReturn(user);

        // JSONでのリクエスト
        mockMvc.perform(MockMvcRequestBuilders.post("/api/users/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .param("role", "ROLE_USER")
                        .content(objectMapper.writeValueAsString(user)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").value("User registered successfully!"));
    }
}
