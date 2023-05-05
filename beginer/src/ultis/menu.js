import icons from './icons'

const { MdOutlineLibraryMusic } = icons
export const sideBarMenu = [
  {
    path: 'mymusic',
    text: 'Cá nhân',
    icon: <MdOutlineLibraryMusic size={24} />
  },
  {
    path: '',
    text: 'Khám phá',
    icon: <MdOutlineLibraryMusic size={24} />,
    end: true
  },
  {
    path: 'zing-chart',
    text: '#zingchart',
    icon: <MdOutlineLibraryMusic size={24} />
  },
  {
    path: 'follow',
    text: 'Theo dõi',
    icon: <MdOutlineLibraryMusic size={24} />
  }
]