package oak.kotlinreacttest.controllers

import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin("*")
@RequestMapping("/test")
class TestController{

    @RequestMapping("/test1", method = [RequestMethod.GET]
        , produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun test() = "ok"
}