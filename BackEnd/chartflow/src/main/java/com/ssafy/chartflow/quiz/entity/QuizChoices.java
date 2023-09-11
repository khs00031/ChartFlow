package com.ssafy.chartflow.quiz.entity;
import jakarta.persistence.*;
import lombok.*;
@Entity
@Getter
@Setter
@Table(name = "quiz_choices")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class QuizChoices {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "quiz_choice_id")
    private long id;

    @ManyToOne
    @JoinColumn(name = "quiz_id")
    private Quiz quiz;

    @Column(name = "content")
    private String content;
}
