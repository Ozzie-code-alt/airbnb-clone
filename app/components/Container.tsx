'use client' ; // research more about client component 


interface ContainerProps {
    children: React.ReactNode;
}


const Container: React.FC<ContainerProps> = ({children}) => {
    return ( <div className=" max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        {children} {/*This wholw  thing passes it to the Container Component in Navbar.tsx*/}
    </div> );
}
 
export default Container;