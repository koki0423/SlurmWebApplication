package jp.omochilab.slurmwebapplication.controller;

import jp.omochilab.slurmwebapplication.model.LoginRequest;
import jp.omochilab.slurmwebapplication.model.User;
import jp.omochilab.slurmwebapplication.model.Role;
import jp.omochilab.slurmwebapplication.repository.RoleRepository;
import jp.omochilab.slurmwebapplication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    // コンストラクタインジェクション
    public UserController(UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder,AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager=authenticationManager;
    }

    // ユーザー登録
    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> registerUser(@RequestBody User user) {
        // パスワードのハッシュ化
        user.setPasswordHash(passwordEncoder.encode(user.getPasswordHash()));

        // 登録日を現在の日時に設定
        user.setRegistered(new Timestamp(System.currentTimeMillis()));

        // ステータスをデフォルトで 'active' に設定
        user.setStatus(User.Status.active);

        // ロールの割り当て
        Set<Role> roles = new HashSet<>();
        Optional<Role> role = roleRepository.findByRoleName("USER");
        if (role.isPresent()) {
            roles.add(role.get());
        } else {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("status", HttpStatus.BAD_REQUEST.value());
            errorResponse.put("message", "Role not found!");
            return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
        }
        user.setRoles(roles);

        // ユーザーの保存
        userRepository.save(user);

        // 成功時のレスポンスを返す
        Map<String, Object> successResponse = new HashMap<>();
        successResponse.put("status", HttpStatus.OK.value());
        successResponse.put("message", "User registered successfully!");
        return new ResponseEntity<>(successResponse, HttpStatus.OK);
    }

    // CSRFトークンを発行して返すメソッド
    @GetMapping("/getCsrf")
    public CsrfToken getCsrfToken(CsrfToken csrfToken) {
        return csrfToken;
    }


    // ログイン（認証はSpring Securityが自動で処理）
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            return ResponseEntity.ok("Login successful");
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
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
