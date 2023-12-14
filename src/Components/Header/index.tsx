import { HeaderContainer } from './styles';
import logoIgnite from '../../assets/Logo-ignite.svg'
import { Timer, Scroll, Link } from 'phosphor-react';

export function Header() {
  <HeaderContainer>
    <img src={logoIgnite} alt="" />
    <nav>
      <Link href="#">
        <Timer size={24} />
      </Link>
      <Link href="#">
        <Scroll size={24} />
      </Link>
    </nav>
  </HeaderContainer>
  
}