import React, { useState } from 'react';
import saleService from '../services/saleService';

function SaleForm() {
    const [sale, setSale] = useState({ productId: '', quantity: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setSale({ ...sale, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await saleService.createSale(sale);
            setMessage('Venda cadastrada com sucesso!');
            setSale({ productId: '', quantity: '' });
        } catch (error) {
            setMessage('Erro ao cadastrar venda.');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Cadastrar Venda</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">ID do Produto</label>
                    <input
                        type="text"
                        name="productId"
                        value={sale.productId}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Quantidade</label>
                    <input
                        type="number"
                        name="quantity"
                        value={sale.quantity}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
        </div>
    );
}

export default SaleForm;
