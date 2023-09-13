package com.ssafy.chartflow.emblem.service;

import com.ssafy.chartflow.emblem.entity.Emblem;
import com.ssafy.chartflow.emblem.entity.UserEmblem;
import com.ssafy.chartflow.emblem.repository.EmblemRepository;
import com.ssafy.chartflow.emblem.repository.UserEmblemRepository;
import com.ssafy.chartflow.emblem.service.observer.EmblemObserver;
import com.ssafy.chartflow.emblem.service.observer.GameFinishObserver;
import com.ssafy.chartflow.emblem.service.observer.TurnFinishObserver;
import com.ssafy.chartflow.emblem.dto.UserGameDto;
import com.ssafy.chartflow.user.entity.User;
import com.ssafy.chartflow.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class EmblemService {
    private final List<EmblemObserver> observers;
    private final UserEmblemRepository userEmblemRepository;
    private final EmblemRepository emblemRepository;
    private final UserRepository userRepository;

    public void addObserver(EmblemObserver observer) {
        observers.add(observer);
    }

    public void removeObserver(EmblemObserver observer) {
        observers.remove(observer);
    }

    public void notifyObserver(UserGameDto userData) {
        for (EmblemObserver observer : observers) {
            if (userData.getType().equals("")&& observer instanceof TurnFinishObserver){
                observer.update(userData);
            }else if (userData.getType().equals("")&& observer instanceof GameFinishObserver){
                observer.update(userData);
            }
        }
    }

    public void saveEmblem(UserGameDto userGameDto, String title){
        Emblem emblem = emblemRepository.findByName(title);
        User user = userRepository.findUserById(userGameDto.getUserId());

        UserEmblem userEmblem = new UserEmblem();
        userEmblem.setUser(user);
        userEmblem.setEmblem(emblem);

        userEmblemRepository.save(userEmblem);
    }

}
