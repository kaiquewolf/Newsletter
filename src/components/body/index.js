import { Article, P, Form, Div } from "./style"


export const Body = () => {

    return (
        <Div>
            <Article>
                <p>Ajude o algorítimo a ser mais certeiro</p>
                <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend. <br /><br />Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.
                </P>
            </Article>
                <Form>
                    <label>
                        <span>Seu nome:</span>
                        <input type="text" name="nome"></input>
                    </label>
                    <label>
                        <span>Email:</span>
                        <input type="email" name="Email"></input>
                    </label>
                    <label>
                        <span>CPF:</span>
                        <input type="text" name="CPF"></input>
                    </label>
                    <div>
                        <input type="radio" value="masculino" name="sexo" id="masculino" />
                        <label htmlFor="masculino" value="masculino" name="masculino">
                            Masculino
                        </label>
                        <input type="radio" value="feminino" name="sexo" id="feminino" />
                        <label htmlFor="feminino" value="feminino" name="feminino">
                            Feminino
                        </label>
                    </div>

                </Form>
        </Div>
    )
}