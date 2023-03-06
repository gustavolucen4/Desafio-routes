type Props = {
    name: string
}

export default function Computer({name}: Props) {

    return(
        <p>{name}</p>
    );
}