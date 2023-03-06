type Props = {
    name: string
}

export default function Book({name}: Props) {

    return(
        <p>{name}</p>
    );
}