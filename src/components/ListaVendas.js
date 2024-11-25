import React, { useState, useEffect } from 'react';
import saleService from '../services/saleService';

function SaleList() {
    const [vendas, setVendas] = useState([]);

    useEffect(() => {
        const fetchSales = async () => {
            try {
                const sales = await saleService.getSales();
                setVendas(sales);
            } catch (error) {
                console.error('Erro ao buscar vendas:', error);
            }
        };

        fetchSales();
    }, []);

    return (
        <div className="container mt-5">
            <h2>Lista de Vendas</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    {vendas.map((venda) => (
                        <tr key={venda.id}>
                            <td>{venda.Product ? venda.Product.name : 'Produto não encontrado'}</td>
                            <td>{venda.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SaleList;
