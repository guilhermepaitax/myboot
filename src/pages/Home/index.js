import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://images.lojanike.com.br/1024x1024/produto/7884_250907_20190604135448.png"
          alt="Tênis"
        />
        <strong>Tênis Nike Air Max 270 Feminino</strong>
        <span>R$359,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://images.lojanike.com.br/1024x1024/produto/7884_250907_20190604135448.png"
          alt="Tênis"
        />
        <strong>Tênis Nike Air Max 270 Feminino</strong>
        <span>R$359,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://images.lojanike.com.br/1024x1024/produto/7884_250907_20190604135448.png"
          alt="Tênis"
        />
        <strong>Tênis Nike Air Max 270 Feminino</strong>
        <span>R$359,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://images.lojanike.com.br/1024x1024/produto/7884_250907_20190604135448.png"
          alt="Tênis"
        />
        <strong>Tênis Nike Air Max 270 Feminino</strong>
        <span>R$359,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://images.lojanike.com.br/1024x1024/produto/7884_250907_20190604135448.png"
          alt="Tênis"
        />
        <strong>Tênis Nike Air Max 270 Feminino</strong>
        <span>R$359,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
