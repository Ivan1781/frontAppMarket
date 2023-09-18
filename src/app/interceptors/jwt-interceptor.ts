import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    
    constructor() {}
    
    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
        ): Observable<HttpEvent<any>> {
        
        const jwtToken = localStorage.getItem('token');
        if(jwtToken){
            req = req.clone({
                setHeaders: {
                    Authorization: `${jwtToken}`
                }
                }
            )
        }
        return next.handle(req)
    }

}