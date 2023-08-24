// Material UI Imports
import { Paper } from "@mui/material"
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// React imports
import { useState } from "react";

// 3rd party tools
import { useParams, Link } from "react-router-dom";

// Custom Components
import {
    darkTheme,
} from "../../../lib/theme";
import DetailItem from "../../common/components/DetailContent";
import SecondaryButton from "../../common/components/Button/SecondaryButton";
import Delete from "../../common/components/Delete";
import { useGetLaptopDetailQuery } from "../laptopsApiSlice";
import { OnClickEvent } from "../../../types/common";

export default function LaptopDetail() {
    const { id } = useParams();
    const {
        data: laptop,
        isLoading,
    } = useGetLaptopDetailQuery({ id: id });
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: OnClickEvent) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    if (!isLoading) {
        return (
            <>
                <Stack direction="row" spacing={1.5} useFlexGap mb={3}>
                    <Typography variant="h4" component="h1">
                        {laptop?.hardware_id}
                    </Typography>
                    <Link
                        to={`edit`}
                        style={{ textDecoration: 'none', color: 'inherit', marginLeft: 'auto' }}
                    >
                        <SecondaryButton>
                            Edit
                        </SecondaryButton>
                    </Link>
                    <SecondaryButton onClick={handleClick}>...</SecondaryButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                        sx={{ marginTop: '10px'}}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem onClick={handleClose}>
                            <Link
                                to={`history`}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                History
                            </Link>
                        </MenuItem>
                        <Delete employeeId={id}/>
                    </Menu>
                </Stack>
                <Paper variant="outlined" sx={{ marginBottom: '30px' }}>
                    <Grid container spacing={2} padding={3}>
                        <DetailItem
                            textAlign={'left'}
                            title={'Serial No.'}
                            content={laptop?.laptop_sr_no}
                        />
                        <DetailItem
                            textAlign={'center'}
                            title={'Assigned To'}
                            content={laptop?.emp_id?.lk_emp_id}
                            isLink
                            linkTo={`/employee/${laptop?.emp_id?.emp_id}`}
                        />
                        <DetailItem
                            textAlign={'right'}
                            title={'Status'}
                            content={laptop?.laptop_status}
                        />
                    </Grid>
                </Paper>
                <Stack
                    spacing={3}
                    direction={'row'}
                    justifyContent="space-between"
                    textAlign={'center'}
                >
                    <Paper variant="outlined">
                        <Typography
                            color={darkTheme.palette.text.primary}
                            fontWeight={600}
                            mt={2}
                        >
                            Laptop Spec
                        </Typography>
                        <Grid container spacing={2} padding={3}>
                            <DetailItem
                                breakPoint={6}
                                textAlign={'left'}
                                title={'Brand'}
                                content={laptop?.brand?.brand_name}
                            />
                            <DetailItem
                                breakPoint={6}
                                textAlign={'right'}
                                title={'Processor'}
                                content={laptop?.processor}
                            />
                            <DetailItem
                                breakPoint={6}
                                textAlign={'left'}
                                title={'RAM'}
                                content={laptop?.ram_capacity}
                            />
                            <DetailItem
                                breakPoint={6}
                                textAlign={'right'}
                                title={'Storage'}
                                content={laptop?.storage_capacity}
                            />
                            <DetailItem
                                breakPoint={6}
                                textAlign={'left'}
                                title={'Screen Size'}
                                content={laptop?.screen_size}
                            />
                            <DetailItem
                                breakPoint={6}
                                textAlign={'right'}
                                title={'Screen Type'}
                                content={laptop?.screen_type}
                            />
                        </Grid>
                    </Paper>
                    <Paper variant="outlined">
                        <Typography
                            color={darkTheme.palette.text.primary}
                            fontWeight={600}
                            mt={2}
                        >
                            Additional Information
                        </Typography>
                        <Grid container spacing={2} padding={3}>
                            <DetailItem
                                breakPoint={6}
                                textAlign={'left'}
                                title={'Purchase Date'}
                                content={laptop?.laptop_date_purchased}
                            />
                            <DetailItem
                                breakPoint={6}
                                textAlign={'right'}
                                title={'Owernship'}
                                content={laptop?.laptop_owner_type}
                            />
                            <DetailItem
                                breakPoint={6}
                                textAlign={'left'}
                                title={'Rental Vendor'}
                                content={laptop?.laptop_rental_vendor}
                            />
                            <DetailItem
                                breakPoint={6}
                                textAlign={'right'}
                                title={'Location'}
                                content={laptop?.laptop_branch?.location}
                            />
                            <DetailItem
                                breakPoint={6}
                                textAlign={'left'}
                                title={'Building'}
                                content={laptop?.laptop_building?.building}
                            />
                        </Grid>
                    </Paper>
                    <Paper variant="outlined">
                        <Typography
                            color={darkTheme.palette.text.primary}
                            fontWeight={600}
                            mt={2}
                        >
                            Other Information
                        </Typography>
                        <Grid container spacing={2} padding={3}>
                            <DetailItem
                                breakPoint={6}
                                textAlign={'left'}
                                title={'Date Returned'}
                                content={laptop?.laptop_date_returned}
                            />
                            <DetailItem
                                breakPoint={6}
                                textAlign={'right'}
                                title={'Latest Remarks'}
                                content={laptop?.laptop_return_remarks}
                            />
                            <DetailItem
                                breakPoint={6}
                                textAlign={'left'}
                                title={'Date Sold'}
                                content={laptop?.laptop_date_sold}
                            />
                        </Grid>
                    </Paper>
                </Stack>
            </>
        )
    }
}