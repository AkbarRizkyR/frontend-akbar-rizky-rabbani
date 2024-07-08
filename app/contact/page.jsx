"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFetchData } from "@/app/hooks/useFetchData";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icons: <FaPhoneAlt />,
    title: "Phone",
    Description: "+62 812 2413 5562",
  },
  {
    icons: <FaEnvelope />,
    title: "Email",
    Description: "Arrizki0098@gmail.com",
  },
  {
    icons: <FaMapMarkedAlt />,
    title: "Address",
    Description:
      "Gang PLO No 50J, Mampang Prapatan, Jakarta Selatan, Indonesia",
  },
];

const Contact = () => {
  const { data: countries, loading: loadingCountries } = useFetchData(
    "http://202.157.176.100:3000/negaras"
  );
  console.log("Countries:", countries);
  const [selectedCountry, setSelectedCountry] = useState();
  const [ports, setPorts] = useState([]);
  const [loadingPorts, setLoadingPorts] = useState(false);
  const [selectedPort, setSelectedPort] = useState(null);
  const [goods, setGoods] = useState([]);
  const [loadingGoods, setLoadingGoods] = useState(false);

  useEffect(() => {
    const fetchPorts = async () => {
      if (selectedCountry) {
        setLoadingPorts(true);
        const response = await fetch(
          `http://202.157.176.100:3000/pelabuhans?filter={"where":{"id_negara":${selectedCountry}}}`
        );
        const data = await response.json();
        setPorts(data);
        setLoadingPorts(false);
        console.log("Ports:", selectedCountry);
      } else {
        setPorts([]);
      }
    };

    fetchPorts();
  }, [selectedCountry]);

  useEffect(() => {
    const fetchGoods = async () => {
      if (selectedPort) {
        setLoadingGoods(true);
        const response = await fetch(
          `http://202.157.176.100:3000/barangs?filter={"where":{"id_pelabuhan":${selectedPort}}}`
        );
        const data = await response.json();
        setGoods(data);
        setLoadingGoods(false);
        console.log("Ports:", selectedPort);
      } else {
        setGoods([]);
      }
    };

    fetchGoods();
  }, [selectedPort]);

  return (
    <section className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s Work Together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                ea sed maiores a animi eius, quos, in architecto non
                voluptatibus rerum reprehenderit!
              </p>
              <div className="grid grid-cols-1 gap-6">
                <Input placeholder="First Name" type="text" />
                <Input placeholder="Last Name" type="text" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Phone" type="tel" />
              </div>
              <Select onValueChange={(value) => setSelectedCountry(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Negara" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Negara</SelectLabel>
                    {!loadingCountries &&
                      countries.map((country) => (
                        <SelectItem
                          key={country.id_negara}
                          value={country.id_negara}
                        >
                          {country.nama_negara}
                        </SelectItem>
                      ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select
                onValueChange={setSelectedPort}
                disabled={!selectedCountry}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Pelabuhan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Pelabuhan</SelectLabel>
                    {!loadingPorts &&
                      ports.map((port) => (
                        <SelectItem
                          key={port.id_pelabuhan}
                          value={port.id_pelabuhan}
                        >
                          {port.nama_pelabuhan}
                        </SelectItem>
                      ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select disabled={!selectedPort}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Barang" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Barang</SelectLabel>
                    {!loadingGoods &&
                      goods.map((good) => (
                        <SelectItem key={good.id_barang} value={good.id_barang}>
                          {good.nama_barang}
                        </SelectItem>
                      ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Tulis Pesan Disini"
              />
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icons}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-xl text-accent">{item.title}</p>
                      <h3 className="text-white/60">{item.Description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
