package jp.omochilab.slurmwebapplication.config;

import jp.omochilab.slurmwebapplication.filter.CustomAuthenticationFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    private final UserDetailsService userDetailsService;

    public SecurityConfig(UserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http, AuthenticationManager authenticationManager) throws Exception {
        // カスタムフィルタをインスタンス化し、認証成功/失敗時のハンドラをセット
        CustomAuthenticationFilter customFilter = new CustomAuthenticationFilter(authenticationManager);
        customFilter.setFilterProcessesUrl("/api/user/login");

        http
                .csrf(csrf -> csrf
                        .ignoringRequestMatchers("/api/user/register", "/api/user/login"))  // CSRFを無効にする
                .authorizeHttpRequests(auth -> auth
                        //.requestMatchers("/admin/**").hasRole("ADMIN")
                        //.requestMatchers("/user/**").hasRole("USER")
                        //.anyRequest().authenticated()
                        .anyRequest().permitAll() // 全リクエストを許可
                )
                .logout(logout -> logout.logoutSuccessUrl("/"))
                .addFilter(customFilter);  // カスタムフィルタを追加

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}


