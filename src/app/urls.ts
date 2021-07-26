import { HttpHeaders } from "@angular/common/http";

export const Auth = {
    login: {
        url: "/auth/login",
        options: {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded'),
            observe: 'response',
            responseType: 'text'
        } 
    },
    logout: {
        url: "/auth/logout",
        options: {
            observe: 'response'
        } 
    },
    isLoggedIn: {
        url: "/app/version",
        options: {
            observe: 'response',
            responseType: 'text'
        }
    }
}