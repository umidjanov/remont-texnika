// function Block3() {
//   return (
//     <div className="bg-[#0B1427] text-white p-[30px] flex flex-col gap-[40px] items-center">
//       <div className="flex flex-col items-center justify-center">
//         <div className="flex items-center gap-[200px]">
//           <div className="lg:flex hidden text-center items-center justify-center w-[50px] h-[50px] rounded-full border-[2px] bordder-white hover:border-[#E7742E]"></div>
//           <h1 className="text-[55px] text-center text-[#E7742E]">
//             ОТЗЫВЫ КЛИЕНТОВ
//           </h1>
//           <div className="lg:flex hidden text-center items-center justify-center w-[50px] h-[50px] rounded-full border-[2px] bordder-white hover:border-[#E7742E]"></div>
//         </div>
//         <div className="lg:flex hidden border-[1px] border-[#ffffff] lg:w-[520px] w-[300px]"></div>
//       </div>
//       <div className="flex gap-[50px] flex-wrap">
//         <a
//           className="cursor-pointer flex flex-col gap-[20px] lg:w-[330px] md:w-[500px] h-[450px] p-[20px] bg-white text-[#0d133a] rounded-md"
//           href="https://wdomain.ru/remont-geko.ru"
//         >
//           <div className="flex items-center gap-[20px]">
//             <div className="flex items-center justify-center w-[60px] h-[60px] bg-[#E7742E] rounded-full text-[40px]">
//               А
//             </div>
//             <h1 className="w-[180px] text-[20px] font-bold text-[#E7742E]">
//               Александр михайловский
//             </h1>
//           </div>
//           <div className="flex items-center justify-center gap-[18px]">
//             <div className="border-[1px] border-gray-400 h-0 w-16"></div>
//             <h1>01 июня 2021</h1>
//             <div className="border-[1px] border-gray-400 h-0 w-16"></div>
//           </div>
//           <h1>
//             Самый лучший сервис! Перестали открываться программы. Пригласила
//             мастера в выходной день. Мастер приехал за 40 минут. Устранил все
//             вирусы, установил новый пакет программ, бессрочный антивирус,
//             почистил от пыли системный блок. Недорого. Составлен договор, все
//             официально. Спасибо! При необходимости в будущем буду обращаться
//             только в эту компанию. Читать весь отзыв
//           </h1>
//         </a>
//         <a
//           className="cursor-pointer flex flex-col gap-[20px] lg:w-[330px] md:w-[500px] h-[450px] p-[20px] bg-white text-[#0d133a] rounded-md"
//           href="https://wdomain.ru/remont-geko.ru"
//         >
//           <div className="flex items-center gap-[20px]">
//             <div className="flex items-center justify-center w-[60px] h-[60px] bg-[#E7742E] rounded-full text-[40px]">
//               И
//             </div>
//             <h1 className="w-[180px] text-[20px] font-bold text-[#E7742E]">
//               Иванкоротков
//             </h1>
//           </div>
//           <div className="flex items-center justify-center gap-[18px]">
//             <div className="border-[1px] border-gray-400 h-0 w-16"></div>
//             <h1>01 июня 2021</h1>
//             <div className="border-[1px] border-gray-400 h-0 w-16"></div>
//           </div>
//           <h1>
//             Надежный проверенный сервис. Обращалась пару раз, для меня удобно
//             что есть выезд на дом, пришлось вызвать мастера первый раз когда
//             племянник напортачил, мастер за 20 минут все исправил, теперь только
//             каждый год продлеваю антивирус, все удобно и не дорого! Рекомендую!
//           </h1>
//         </a>
//         <a
//           className="cursor-pointer flex flex-col gap-[20px] lg:w-[330px] md:w-[500px] h-[450px] p-[20px] bg-white text-[#0d133a] rounded-md"
//           href="https://wdomain.ru/remont-geko.ru"
//         >
//           <div className="flex items-center gap-[20px]">
//             <div className="flex items-center justify-center w-[60px] h-[60px] bg-[#E7742E] rounded-full text-[40px]">
//               Е
//             </div>
//             <h1 className="w-[180px] text-[20px] font-bold text-[#E7742E]">
//               елена плотникова
//             </h1>
//           </div>
//           <div className="flex items-center justify-center gap-[18px]">
//             <div className="border-[1px] border-gray-400 h-0 w-16"></div>
//             <h1>01 июня 2021</h1>
//             <div className="border-[1px] border-gray-400 h-0 w-16"></div>
//           </div>
//           <h1>
//             Спасибо за вашу работу! Теперь компьютер работает как надо, все
//             отлично. Очень приятно что мастер по просьбе поставил родительский
//             контроль на компьютер. Мастер с диспетчером бесплатно меня
//             консультируют по телефону в любой день. Побольше бы таких
//             добросовестных компаний. Спасибо!
//           </h1>
//         </a>
//       </div>
//       <div className="text-[30px] flex flex-col items-center">
//         <h1 className="flex gap-[5px]">
//           Мы на
//           <a className="text-[#E7742E]" href="https://www.otzovik.com/">
//             www.otzovik.com
//           </a>
//         </h1>
//         <h1 className="flex gap-[5px]">
//           Мы на
//           <a className="text-[#E7742E]" href="https://irecommend.ru/">
//             www.irecommend.ru
//           </a>
//         </h1>
//       </div>
//     </div>
//   );
// }

// export default Block3;





import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}