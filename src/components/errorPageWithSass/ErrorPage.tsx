import * as React from 'react';
import styles from './styles.module.sass'

const ErrorPage = () => {
    return (
        <div className={styles.errorPage}>
            <div>
                <p>Что-то пошло не так</p>
                <p>Повторите попытку поже</p>
            </div>
        </div>
    );
};

export default ErrorPage;