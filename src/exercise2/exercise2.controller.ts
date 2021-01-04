import { Controller, Get, Query, ValidationPipe } from "@nestjs/common";
import { Exercise2Service } from "./exercise2.service";
import { sortProductsDto } from "./SortOption.dto";

@Controller("exercise2")
export class Exercise2Controller {
  constructor(private exercise2Service: Exercise2Service) {}

  @Get("/sort")
  sortProducts(@Query(ValidationPipe) query: sortProductsDto) {
    const { sortOption } = query;
    return this.exercise2Service.sortProducts(sortOption);
  }
}
