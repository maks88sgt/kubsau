// @mui
import PropTypes from 'prop-types';
import { Card, Typography, CardHeader, CardContent } from '@mui/material';
import { Timeline, TimelineDot, TimelineItem, TimelineContent, TimelineSeparator, TimelineConnector } from '@mui/lab';
// utils

// ----------------------------------------------------------------------

ScheduleTimeline.propTypes = {
  title: PropTypes.string,
};

export default function ScheduleTimeline({ title, list, ...other }) {
    return RenderDefault(title, '', list, other);
}

function RenderDefault(title, subheader, list, ...other) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <CardContent
        sx={{
          '& .MuiTimelineItem-missingOppositeContent:before': {
            display: 'none',
          },
        }}
      >
        <Timeline>
          {list.map((item, index) => (
              <OrderItem key={item.lessonNumber} item={item} isLast={index === list.length - 1} index={index} />
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
}

// ----------------------------------------------------------------------

OrderItem.propTypes = {
    isLast: PropTypes.bool,
    index: PropTypes.number,
    item: PropTypes.shape({
      disciplineName: PropTypes.string,
      groups: PropTypes.array,
      auditorium: PropTypes.string,
      type: PropTypes.string,
  }),
};

function OrderItem({ item, isLast, index }) {
    const { disciplineName, groups, auditorium } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
           color={'success'} 
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>

      <TimelineContent>
              <Typography variant="subtitle2">{(`${index+1}. ${disciplineName}`)}</Typography>

              <Typography variant="caption" color="green">{auditorium}</Typography>

              <Typography variant="caption">{' | '}</Typography>

              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {(groups.join(", "))}
              </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}
