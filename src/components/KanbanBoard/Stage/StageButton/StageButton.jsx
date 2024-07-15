import styles from './StageButton.module.css';

export default function StageButton({ children, onClick }) {
    return(
        <button className={ styles.stageButton } onClick={ onClick }>
            { children }
        </button>
    );
}