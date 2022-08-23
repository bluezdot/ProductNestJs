import { Controller, Delete, Get, HttpCode, Post, Put, Req, Body, Query, Param, Header} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  // Controller esponsible for incoming requests -> responses
  
  @Get()
  getHello1(): {name:string} {
    return {name: 'Max'}
  }

  @Get()
  getHello(@Param() ten:string): string {
    return this.appService.getHello(String(ten), "ga");
  }

  @Get()
  @HttpCode(400)
  getGoodbye(): string {
    return this.appService.getGoodbye();
  }

  // @HttpCode(400) -> sets the response code to 400
  // @Req -> handles or throw an exception if the request is not valid
  // @Header -> custom response header
  // @Redirect -> redirects to another route. 2 parameters: url and status code
  // @Param -> reference to a parameter by name

  // -- above: didnt accept any client params

  // @Body -> 

  // @Injectable() -> can be injected into other constructor


  // // dynamic routing
  // @Get("b/:id")
  // @HttpCode(204)
  // findAll(@Req() request: Request, @Query("testa") test): string {
  //   return 'This action returns all cats'+test;
  // }

}
