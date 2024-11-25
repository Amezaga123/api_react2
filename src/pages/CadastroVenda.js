import React, { useState } from 'react';

const CadastroVenda = () => {
    const [venda, setVenda] = useState({ cliente: '', produto: '', quantidade: '' });

    const handleChange = (e) => {
        setVenda({ ...venda, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Venda cadastrada:', venda);
        alert('Venda cadastrada com sucesso!');
        setVenda({ cliente: '', produto: '', quantidade: '' });
    };

    return (
        <div className="container mt-5">
            <h2>Cadastro de Venda</h2>
            <form onSubmit={handleSubmit} className="bg-light p-4 border rounded">
                <div className="mb-3">
                    <label className="form-label">Cliente</label>
                    <input
                        type="text"
                        className="form-control"
                        name="cliente"
                        value={venda.cliente}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Produto</label>
                    <input
                        type="text"
                        className="form-control"
                        name="produto"
                        value={venda.produto}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Quantidade</label>
                    <input
                        type="number"
                        className="form-control"
                        name="quantidade"
                        value={venda.quantidade}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar Venda</button>
            </form>
        </div>
    );
};

export default CadastroVenda;
