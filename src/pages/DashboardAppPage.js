import React, {Component, useEffect, useState} from 'react';
import {Helmet} from 'react-helmet-async';
// @mui
import {Grid, Container, Typography, Link} from '@mui/material';
import {useNavigate} from "react-router-dom";
// sections
import {
    AppTasks,
    AppNewsUpdate,
    ScheduleTimeline
} from '../sections/@dashboard/app';


// ----------------------------------------------------------------------

export const DashboardAppPage = () => {

    const {lessons, setLessons} = useState()
    const [disciplines, setDisciplines] = useState()

    const populateScheduleData = async () => {
        const response = await fetch(`dashboard/ScheduleForCurrentWeek`);
        const data = await response.json();
        setLessons(data.schedule[0].lessons);
    }

    const populateDisciplinesData = async () => {
        const response = await fetch(`dashboard/DisciplinesOfEmployee`,);
        const data = await response.json();
        setDisciplines(data.disciplines);
    }

    useEffect(() => {
        populateScheduleData();
        populateDisciplinesData();
    }, [])


    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря'
    ];

    const today = new Date();
    const currentDate = `${today.getDate()} ${months[today.getMonth()]}`;
    console.log(currentDate);

    const {navigate} = useNavigate()

    return (
        <>
            <Helmet>
                <title> Главная | АИС Успеваемость </title>
            </Helmet>

            <Container maxWidth="xl">
                <Typography variant="h4" sx={{mb: 5}}>
                    Сегодня {currentDate}
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12} lg={12}>
                        <AppTasks
                            title="Задачи*"
                            list={[
                                {
                                    id: '1',
                                    label: 'Заполнить успеваемость за сегодня для группы ИТ2041 по дисциплине "Дискретная математика"'
                                },
                                {
                                    id: '2',
                                    label: 'Заполнить успеваемость за сегодня для группы ПИ2041 по дисциплине "Экономика"'
                                },
                                {
                                    id: '3',
                                    label: 'Заполнить аттестационный лист по дисциплине "Информационная безопасность" для группы ИТ2041'
                                },
                                {
                                    id: '4',
                                    label: 'Закрыть ведомость группы ИТ2041 по дисциплине "Основы финансовой грамотности" до 02.02.23'
                                },
                            ]}
                        />
                    </Grid>

                    <Grid item xs={12} md={6} lg={8}>
                        <AppNewsUpdate
                            title="Заполнить журнал"
                            list={disciplines}
                        />
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <ScheduleTimeline
                            title="Расписание на сегодня"
                            list={lessons}/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default DashboardAppPage;
