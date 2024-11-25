import React, { useState } from 'react';
import productService from '../services/productService';

function ProductForm() {
    const [product, setProduct] = useState({
        nome: '',
        preco: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await productService.createProduct(product);  
            alert('Produto criado com sucesso!');
        } catch (error) {
            console.error('Erro ao criar produto:', error);
            alert('Erro ao criar produto');
        }
    };

    return (
        <div>
            <h2>Criar Produto</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nome"
                    value={product.nome}
                    onChange={handleChange}
                    placeholder="Nome do Produto"
                    required
                />
                <input
                    type="number"
                    name="preco"
                    value={product.preco}
                    onChange={handleChange}
                    placeholder="Preço"
                    required
                />
                <button type="submit">Cadastrar Produto</button>
            </form>
        </div>
    );
}

export default ProductForm;
