import { LoaderWrapper, LoadingContainer, LoadingMessage } from "@/styles/Users";
import { LoaderIcon } from "lucide-react";

async function Loading () {
  return (
    <LoadingContainer>
      <LoadingMessage>Carregando página... Aguarde</LoadingMessage>
      <LoaderWrapper>
        <LoaderIcon size={28} />
      </LoaderWrapper>
    </LoadingContainer>
  );
}

export default Loading;
