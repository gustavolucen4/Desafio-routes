type Props = {
    name: string
}

export default function Livros({name}: Props) {

    return(
        <p>{name}</p>
    );
}