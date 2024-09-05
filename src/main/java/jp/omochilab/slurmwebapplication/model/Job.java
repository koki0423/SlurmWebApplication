package jp.omochilab.slurmwebapplication.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Setter
@Getter
@Entity
@Table(name = "jobs")
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "job_id")
    private int jobId;

    @Column(name = "user_id", nullable = false)
    private int userId;

    @Column(name = "date", nullable = false)
    private Timestamp date;

    @Column(name = "state", nullable = false)
    @Enumerated(EnumType.STRING)
    private State state;

    @Column(name = "last_updated", nullable = false)
    private Timestamp lastUpdated;

    @Column(name = "compute_type", nullable = false)
    @Enumerated(EnumType.STRING)
    private ComputeType computeType;

    public enum State {
        pending,
        running,
        completed,
        failed
    }

    public enum ComputeType {
        CPU,
        GPU
    }
}
