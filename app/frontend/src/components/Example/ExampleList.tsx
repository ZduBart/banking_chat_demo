import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Czym jest Konto Jakże Osobiste?",
        value: "Czym jest Konto Jakże Osobiste?"
    },
    { text: "Opowiedz o promocji bankuj mobilnie", value: "Opowiedz o promocji bankuj mobilnie" },
    { text: "Jakie są korzyści z korzystania z aplikacji Alior Mobile?", value: "Jakie są korzyści z korzystania z aplikacji Alior Mobile?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
