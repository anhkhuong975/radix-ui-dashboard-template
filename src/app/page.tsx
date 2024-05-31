import {Blockquote, Card, Code, Container, DataList, Heading, Link} from "@radix-ui/themes";

export default function Home() {
    return (
        <Container>
            <Heading className='my-3'>DASHBOARD TEMPLATE</Heading>
            <Card className='space-y-6'>
                <Blockquote>
                    <Code>This is a simple template with: Dashboard layout, menu sidebar. This was included RadixUI
                        library as the util components, and Tailwindcss. This build was created with one sole purpose:
                        to save time creating a dashboard project with the most basic layout</Code>
                </Blockquote>

                <DataList.Root>
                    <DataList.Item>
                        <DataList.Label minWidth="88px">Build by</DataList.Label>
                        <DataList.Value>
                            <Link target="_blank" href="https://khuong-pham.vercel.app/">Khuong Pham</Link>
                        </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.Label minWidth="88px">Theme component</DataList.Label>
                        <DataList.Value>
                            <Link target="_blank" href="https://www.radix-ui.com/">RADIX UI</Link>
                        </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.Label minWidth="88px">CSS FW</DataList.Label>
                        <DataList.Value>
                            <Link target="_blank" href="https://tailwindcss.com/">
                                Tailwindcss
                            </Link>
                        </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.Label minWidth="88px">Framework</DataList.Label>
                        <DataList.Value>
                            NextJS
                        </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.Label minWidth="88px">Lang</DataList.Label>
                        <DataList.Value>
                            Typescript
                        </DataList.Value>
                    </DataList.Item>
                </DataList.Root>
            </Card>
        </Container>
    );
}
