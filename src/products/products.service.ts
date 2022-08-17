import { Injectable } from "@nestjs/common";
import { Product } from "./products.model";

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    insertProduct(title: string, description: string, price: number) {
        // id chưa unique
        const prodId = new Date().getTime();
        const newProduct = new Product(prodId, title, description, price)
        this.products.push(newProduct);
        return prodId;
    }


}