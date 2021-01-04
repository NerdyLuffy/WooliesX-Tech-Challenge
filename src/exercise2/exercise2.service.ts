import {
  BadRequestException,
  HttpService,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Product } from './ProductInterface';
import { ShoppersHistory } from './ShoppersHistoryInterface';
import _ from '../config/default';

@Injectable()
export class Exercise2Service {
  constructor(private httpService: HttpService) {}

  async getProducts(): Promise<Product[]> {
    try {
      const response = await this.httpService
        .get(`${_.PRODUCTS_API}?token=${_.TOKEN}`)
        .toPromise();
      return response.data;
    } catch (error) {
      if (error.response.status === 400) {
        throw new BadRequestException(error.response.data);
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async getShoppersHistory(): Promise<ShoppersHistory[]> {
    try {
      const response = await this.httpService
        .get(`${_.SHOPPERS_HISTORY_API}?token=${_.TOKEN}`)
        .toPromise();
      return response.data;
    } catch (error) {
      if (error.response.status === 400) {
        throw new BadRequestException(error.response.data);
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async sortProducts(sortType: string): Promise<Product[]> {
    const products = await this.getProducts();
    switch (sortType) {
      case (sortType = 'Low'):
        return products.sort((a: Product, b: Product) =>
          a.price > b.price ? 1 : -1,
        );
      case (sortType = 'High'):
        return products.sort((a: Product, b: Product) =>
          a.price < b.price ? 1 : -1,
        );
      case (sortType = 'Ascending'):
        return products.sort((a: Product, b: Product) =>
          a.name > b.name ? 1 : -1,
        );
      case (sortType = 'Descending'):
        return products.sort((a: Product, b: Product) =>
          a.name < b.name ? 1 : -1,
        );
      case (sortType = 'Recommended'):
        return this.recommendedProducts(products);
      default:
        throw new InternalServerErrorException();
    }
  }

  async recommendedProducts(allProducts: Product[]): Promise<Product[]> {
    const userShoppingHistory: ShoppersHistory[] = await this.getShoppersHistory();

    const purchasedProducts: Product[] = userShoppingHistory.reduce(
      (accumulator, currentValue) => {
        if (currentValue.products) {
          accumulator.push(...currentValue.products);
        }
        return accumulator;
      },
      [],
    );

    const popularPorducts: Product[] = allProducts.map((product) => {
      product.popularity = purchasedProducts.reduce(
        (accumulator, currentValue) => {
          if (currentValue.name === product.name) {
            accumulator += 1;
          }
          return accumulator;
        },
        0,
      );
      return product;
    });

    //Sort, Clean and return
    return popularPorducts
      .sort((a: Product, b: Product) => (a.popularity > b.popularity ? -1 : 1))
      .map((product) => {
        delete product.popularity;
        return product;
      });
  }
}
