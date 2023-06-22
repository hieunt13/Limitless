package fpt.edu.limitlessapi.exception;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;

@Getter
@Setter
public class InvalidExerciseInputException extends ResponseStatusException {

    private HashMap errorFields;

    public InvalidExerciseInputException(String message, HashMap errorFields) {
        super(HttpStatus.UNPROCESSABLE_ENTITY, message);
        this.errorFields = errorFields;
    }

}