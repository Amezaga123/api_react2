import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import ListaUsuarios from './pages/ListaUsuarios';
import CadastroProduto from './pages/CadastroProduto';
import ListaProdutos from './pages/ListaProdutos';
import SaleForm from './components/SaleForm';
import ListaVendas from './pages/ListaVendas';

const App = () => {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">APICadastro App</Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cadastro">Cadastro</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/usuarios">Lista de Usuários</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cadastro-produto">Cadastrar Produto</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/produtos">Lista de Produtos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/vendas">Cadastrar Venda</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/lista-vendas">Lista de Vendas</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/usuarios" element={<ListaUsuarios />} />
                    <Route path="/cadastro-produto" element={<CadastroProduto />} />
                    <Route path="/produtos" element={<ListaProdutos />} />
                    <Route path="/vendas" element={<SaleForm />} />
                    <Route path="/lista-vendas" element={<ListaVendas />} />
                    <Route path="/" element={<Cadastro />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
