import icons from './icons'

const { MdOutlineLibraryMusic, MdOutlineFeed, TbChartArcs, TbChartPie } = icons
export const sideBarMenu = [
  {
    path: 'mymusic',
    text: 'Cá nhân',
    icon: <MdOutlineLibraryMusic size={24} />
  },
  {
    path: '',
    text: 'Khám phá',
    icon: <TbChartArcs size={24} />,
    end: true
  },
  {
    path: 'zing-chart',
    text: '#zingchart',
    icon: <TbChartPie size={24} />
  },
  {
    path: 'follow',
    text: 'Theo dõi',
    icon: <MdOutlineFeed size={24} />
  }
]
export const searchMenu = [
  {
    path: 'tat-ca',
    text: 'TẤT CẢ',
    icon: <MdOutlineLibraryMusic size={24} />
  },
  {
    path: 'bai-hat',
    text: 'BÀI HÁT',
    icon: <TbChartArcs size={24} />,
    end: true
  },
  {
    path: 'playlist',
    text: 'PLAYLIST/ALBUM',
    icon: <TbChartPie size={24} />
  }
  // {
  //   path: 'follow',
  //   text: 'Theo dõi',
  //   icon: <MdOutlineFeed size={24} />
  // }
]
