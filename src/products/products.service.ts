import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./products.model";

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    insertProduct(title: string, description: string, price: number) {
        // id chưa unique
        const prodId = '_' + Math.random().toString(36).substr(2, 9);
        const newProduct = new Product(prodId, title, description, price)
        this.products.push(newProduct);
        return prodId;
    }

    getProducts() {
        return [...this.products];
    }

    getSingleProduct(productId: string) {
        const product = this.findProduct(productId)[0];
        return { ... product};
        
    }

    updateProduct(productId: string, title: string, description: string, price: number) {
        const [product, index] = this.findProduct(productId);
        const updateProduct = {... product};
        if (title) {
            updateProduct.title = title;
        }

        if (description) {
            updateProduct.description = description; 
        }

        if (price) {
            updateProduct.price = price;
        }
        this.products[index] = updateProduct;
    }

    // Delete[1] kiểu này sẽ xóa được thông tin của vật phẩm, nhưng để lại 1 element null
    // removeProduct(productId: string) {
    //     const productIdx = this.findProduct(productId)[1];
    //     delete this.products[productIdx];
    // }

    // Delete[2] kiểu này sẽ xóa được thông tin của vật phẩm và sắp xếp lại list element
    removeProduct(productId: string) {
        const productIdx = this.findProduct(productId)[1];
        this.products.splice(productIdx, 1); // xóa 1 vật phẩm kể tử index, tức là xóa mỗi chính nó
    }

    private findProduct(productId: string): [Product, number] {
        const productIdx = this.products.findIndex((prod) => prod.id == productId)
        const product = this.products[productIdx];
        if (!product) {
            throw new NotFoundException("Could not find product");
        } 
        return [product, productIdx];
    }
}