import * as React from 'react';
import { useRouter } from 'next/router';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import styles from './breadcrumbsComponent.module.css';

export default function BreadcrumbsComponent() {
    const router = useRouter();
    const { pathname } = router;

    // Mapeamento de rotas para títulos personalizados
    const routeMap = {
        '/': 'Home',
        '/infopage': 'O que é a Zampet?',
        '/cadastro': 'Cadastro'
    };

    // Função para gerar os breadcrumbs com base no pathname
    const generateBreadcrumbs = () => {
        const pathnames = pathname.split('/').filter((x) => x);
        const breadcrumbs = [
            <Link underline="hover" key="/" color="inherit" href="/" className={styles.breadcrumbItem}>
                Home
            </Link>,
        ];

        pathnames.forEach((value, index) => {
            const href = `/${pathnames.slice(0, index + 1).join('/')}`;
            const breadcrumbLabel = routeMap[href] || value;

            breadcrumbs.push(
                index === pathnames.length - 1 ? (
                    <Typography key={href} className={styles.breadcrumbCurrentPage}>
                        {breadcrumbLabel}
                    </Typography>
                ) : (
                    <Link underline="hover" key={href} color="inherit" href={href} className={styles.breadcrumbItem}>
                        {breadcrumbLabel}
                    </Link>
                )
            );
        });

        return breadcrumbs;
    };

    return (
        <div className={styles.pageContainer}>
            <Stack spacing={2}>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" className={styles.separatorIcon} />}
                    aria-label="breadcrumb"
                    className={styles.breadcrumbs}
                >
                    {generateBreadcrumbs()}
                </Breadcrumbs>
            </Stack>
        </div>
    );
}
