package oak.kotlinreacttest

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
class KotlinReactTest{
    companion object {
        @JvmStatic fun main(args: Array<String>) {
            SpringApplication.run(KotlinReactTest::class.java, *args)
        }
    }
}