import { Toast, useToast, VStack } from "native-base";
import { useRoute } from "@react-navigation/native";

import { Header } from "../components/Header";
import { useState, useEffect } from "react";
import { Loading } from "../components/Loading";
import { api } from "../services/api";

interface RouteParams {
    id: string;
}


export function Details() {
    const [isLoading, setIsLoading] = useState(true);
    const toast = useToast();

    const route = useRoute();
    const { id } = route.params as RouteParams

    async function fetchPoolDetails() {
        try {
            setIsLoading(true);

            const response = await api.get(`/pools/${id}`);
            console.log(response.data)


        } catch (error) {
            console.log(error);
            toast.show({
                title: 'Não foi possivel carregar os detalhes do bolão',
                placement: 'top',
                bgColor: 'red.500'
            });

        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchPoolDetails();
    }, [id]);

    if (isLoading) {
        return (
            <Loading />
        );
    }

    return (
        <VStack flex={1} bgColor="gray.900" >
            <Header title={id} showBackButton showShareButton />
        </VStack>
    );
}