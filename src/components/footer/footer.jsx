import { FacebookLogo, WhatsappLogo, InstagramLogo } from "@phosphor-icons/react"



export const Footer = () => {
    
    return(
        
      <footer className="Flex fixed bottom-0 left-0  h-20 p-6 bg-white/20 w-screen">
       <p className="text-white">Todos os direitos reservado</p>
       <div className="flex items-end justify-end space-x-4">
        <WhatsappLogo size={32} className="text-white" />
        <FacebookLogo size={32} className="text-white" />
        <InstagramLogo size={32} className="text-white" />
      </div>
        </footer>
      
    )
}