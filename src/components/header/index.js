import { Headers, H2, H1, P, Button } from "./style"

export const Header = () => {
    return (
        <Headers>
            <H2>uma seleção de produtos</H2>
            <H1>especial para você</H1>
            <P>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</P>
            <nav>
                <Button>Conheça a linx</Button>
                <Button>Ajude o algorítimo</Button>
                <Button>Seus produtos</Button>
                <Button>Compartilhe</Button>
            </nav>
        </Headers>
    );
};