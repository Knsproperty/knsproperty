'use client'
import Link from "next/link"
import Container from "../container"
import { usePathname } from 'next/navigation'


const excepted_routes = ['/property/buy']


const Breadcrumbs: React.FC = () => {
    const pathname = usePathname()
    const splited = splitInput(pathname)

    if (pathname == '/' || excepted_routes.includes(pathname)) {
        return null
    }

    return (
        <div className="text-sm py-3  border-b border-t border-[#8080803a] ">
            <Container>
                <div className="breadcrumbs md:ml-10">
                    <ul>
                        {
                            splited.map((route, index) => {
                                const { name, href } = getNameByPath(route)
                                return (
                                    <li key={index}>
                                        {index !== splited.length - 1
                                            ? <Link href={href} className="capitalize text-sm font-light">{name}</Link>
                                            : <span className="text-sm capitalize">{route}</span>}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </Container>
        </div>
    )
}
export default Breadcrumbs


function splitInput(input: string) {
    const parts = input.split('/').filter(part => part !== '');
    return ['/', ...parts];
}

function getNameByPath(path: string) {
    const names: any = {
        '/': {
            name: 'home',
            href: '/'
        },
        'about-us': {
            name: 'about us',
            href: '/about-us'
        },
        team: {
            name: 'team',
            href: '/about-us/team'
        }
    }
    return names[path] ? names[path] : { name: '', href: '' } as { name: string, href: string }

}
