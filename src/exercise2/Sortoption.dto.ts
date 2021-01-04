import { IsIn, IsNotEmpty } from 'class-validator';
import { FilterOptions } from './filterEnum';

export class sortProductsDto {
  @IsNotEmpty()
  @IsIn([
    FilterOptions.LOW,
    FilterOptions.HIGH,
    FilterOptions.ASCENDING,
    FilterOptions.DESCENDING,
    FilterOptions.RECOMMENDED,
  ])
  sortOption: FilterOptions;
}
