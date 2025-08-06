import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import { newsItems, studyAbroadItems } from './data/sectionItems';
import About from './pages/About';
import Ai from './pages/Ai';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Department from './pages/Department';
import History from './pages/History';
import Home from './pages/Home';
import Language from './pages/Language';
import News from './pages/News';
import Notice from './pages/Notice';
import Process from './pages/Process';
import Sns from './pages/Sns';
import Study from './pages/Study';
import StudyAbroad from './pages/StudyAbroad';
import Talent from './pages/Talent';
import Value from './pages/Value';
import Vision from './pages/Vision';


// 이미지 프리로딩 함수 (Header.jsx의 것을 재활용하거나 유사하게 정의)
const preloadPageBImages = async (imagesSrc) => {
  let imgSrc = [...imagesSrc];
  let loadedImgSrc = [];

  // alert('이미지 로드시작!!')

  await Promise.allSettled(imgSrc.map(src => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        console.log(`Image loaded: ${src}`);
        // alert('이미지 로드 완료!!')
        resolve(img);
        loadedImgSrc.push(src);
      };
      img.onerror = img.onabort = () => {
        console.warn(`Failed to preload image in loader: ${src}`);
        resolve(null); // 실패해도 계속 진행하도록 resolve(null) 또는 reject
      };
      img.src = src;
    });
  }));
  return { imgSrc: loadedImgSrc }; // 로더 결과 반환
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'company',
        loader: async () => redirect('/company/about'),
        children: [
          { path: 'about', element: <About /> },
          { path: 'value', element: <Value /> },
          { path: 'vision', element: <Vision /> },
          { path: 'history', element: <History /> },
        ],
      },
      {
        path: 'service',
        loader: async () => redirect('/service/language'),
        children: [
          { path: 'language', element: <Language /> },
          { path: 'ai', element: <Ai /> },
          { path: 'study', element: <Study /> },
        ],
      },
      {
        path: 'career',
        loader: async () => redirect('/career/talent'),
        children: [
          { path: 'talent', element: <Talent /> },
          { path: 'process', element: <Process /> },
          { path: 'department', element: <Department /> },
          { path: 'notice', element: <Notice /> },
        ],
      },
      {
        path: 'resources',
        loader: async () => redirect('/resources/news'),
        children: [
          { path: 'news', element: <News /> },
          { path: 'blog', element: <Blog /> },
          { path: 'sns', element: <Sns /> },
        ],
      },
      {
        path: 'news', element: <News />, loader: async () => {
          const { imgSrc } = await preloadPageBImages(newsItems.mainBanner.banner);
          return { imgSrc };
        }
      },
      { path: 'contact', element: <Contact /> },
      {
        path: 'study-abroad', element: <StudyAbroad />, loader: async () => {
          const { imgSrc } = await preloadPageBImages(studyAbroadItems.mainBanner.banner);
          return { imgSrc };
        }
      },
    ],
  },
]);
