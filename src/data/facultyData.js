// New clean Faculty Data schema matching the modern UI reference:
// { id, name, designation, department, image, description }
// All old badges, ratings, mentorship, office hours, and awards have been completely removed.
import anusha from "../assets/faculty/anusha.jpeg";
import poonam from "../assets/faculty/poonam.jpeg";
import mounika from "../assets/faculty/mounika.jpeg";
import priyanka from "../assets/faculty/priyanka.jpeg";
import santhosha from "../assets/faculty/santhosha.jpeg";
import k_sandhya from "../assets/faculty/k_sandhya.jpeg";
import husna from "../assets/faculty/husna.jpeg";
import sandhya from "../assets/faculty/sandhya.jpeg";
import shalu from "../assets/faculty/shalu.jpeg";
import jharna from "../assets/faculty/jharna.jpeg";


export const facultyData = [
  {
    id: 'anusha',
    name: 'N.Anusha Kumari',
    designation: 'Facilitator',
    department: 'Computer Science',
    image: anusha,
    description: 'Focused on practical learning, digital skills, and problem-solving.'
  },
  {
    id: 'poonam',
    name: 'G.Poonam',
    designation: 'Facilitator',
    department: 'Hindi',
    image: poonam,
    description: 'Encourages language learning through engaging and effective teaching.'
  },
  {
    id: 'mounika',
    name: 'N.Mounika',
    designation: 'Facilitator',
    department: 'Science',
    image: mounika,
    description: 'Promotes curiosity and scientific thinking through interactive learning.'
  },
  {
    id: 'priyanka',
    name: 'B.Priyanka',
    designation: 'Facilitator',
    department: 'English',
    image: priyanka,
    description: 'Builds communication skills through engaging English learning.'
  },
  {
    id: 'santhosha',
    name: 'K.Santhosha',
    designation: 'Admin',
    department: 'Admin',
    image: santhosha,
    description: 'Supports smooth administration and effective school operations.'
  },
  {
    id: 'sandhya-math',
    name: 'K.Sandhya',
    designation: 'Facilitator',
    department: 'Mathematics',
    image: k_sandhya,
    description: 'Makes mathematics simple through clear and practical learning.'
  },
  {
    id: 'husna',
    name: 'Husna Farheen',
    designation: 'Facilitator',
    department: 'Science',
    image: husna,
    description: 'Inspires students to explore science through curiosity and discovery.'
  },
  {
    id: 'sandhya-mother',
    name: 'G.Sandhya',
    designation: 'Facilitator',
    department: 'Mother Teacher',
    image: sandhya,
    description: 'Creates a caring and supportive environment for young learners.'
  },
  {
    id: 'shalu',
    name: 'Shalu',
    designation: 'Facilitator',
    department: 'Mother Teacher',
    image: shalu,
    description: 'Supports students with nurturing guidance and engaging learning.'
  },
  {
    id: 'jharna',
    name: 'Jharna Das',
    designation: 'Facilitator',
    department: 'Hindi',
    image: jharna,
    description: 'Encourages confident Hindi language learning through engaging lessons.'
  }
];