package jp.omochilab.slurmwebapplication.controller;

import jp.omochilab.slurmwebapplication.model.User;
import jp.omochilab.slurmwebapplication.model.Role;
import jp.omochilab.slurmwebapplication.repository.RoleRepository;
import jp.omochilab.slurmwebapplication.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    // コンストラクタインジェクション
    public UserController(UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // ユーザー登録
    @PostMapping("/register")
    public String registerUser(@RequestBody User user, @RequestParam("role") String roleName) {
        // パスワードのハッシュ化
        user.setPasswordHash(passwordEncoder.encode(user.getPasswordHash()));

        // ロールの割り当て
        Set<Role> roles = new HashSet<>();
        Optional<Role> role = roleRepository.findByRoleName(roleName);
        if (role.isPresent()) {
            roles.add(role.get());
        } else {
            return "Role not found!";
        }
        user.setRoles(roles);

        // ユーザーの保存
        userRepository.save(user);
        return "User registered successfully!";
    }

    // ログイン（認証はSpring Securityが自動で処理）
    @GetMapping("/login")
    public String login() {
        return "Login successful!";
    }

    // ロールベースでアクセスできる管理者向けのAPI
    @GetMapping("/admin")
    public String adminAccess() {
        return "Hello Admin!";
    }

    // ロールベースでアクセスできる一般ユーザー向けのAPI
    @GetMapping("/user")
    public String userAccess() {
        return "Hello User!";
    }
}
