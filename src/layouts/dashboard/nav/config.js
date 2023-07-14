// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Главная',
    path: '/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Журнал',
    path: '/journalmain',
    icon: icon('ic_user'),
  },
  {
    title: 'Аттестации',
    path: '/attestations',
    icon: icon('ic_cart'),
  },
  {
    title: 'Мои ведомости',
    path: '/mystatements',
    icon: icon('ic_blog'),
  },
  {
    title: 'Практики',
    path: '/mypracticestatements',
    icon: icon('ic_lock'),
  },
];

export default navConfig;
