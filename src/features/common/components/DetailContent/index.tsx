import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { darkTheme } from '../../../../lib/theme';
import Link from '../Link';

interface DetailItemProps {
    breakPoint?: number,
    textAlign: any, // TODO: change this
    title: string,
    content: string,
    isLink?: boolean,
    linkTo?: string
}

export default function ({
    breakPoint = 4,
    textAlign,
    title,
    content,
    isLink = false,
    linkTo = ''
}: DetailItemProps) {
    return (
        <Grid item xs={breakPoint} textAlign={textAlign} data-testid={'detailItemContainer'}>
            <Typography
                fontSize={'0.75rem'}
                color={darkTheme.palette.text.secondary}
                data-testid={'detailItemTitle'}
            >
                {title}
            </Typography>
            { 
                isLink
                ? (
                    <Link to={linkTo} data-testid={'detailItemLink'}>
                        {content}
                    </Link>
                )
                : (
                    <Typography
                        fontWeight={'bold'}
                        data-testid={'detailItemContent'}
                    >
                        {content}
                    </Typography>
                )
            }
        </Grid>
    )
}