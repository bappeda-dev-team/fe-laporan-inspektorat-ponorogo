import { OptionType } from "@/types";

export interface GetResponseFindallPegawai {
    id: number;
    nip: string;
    namaPegawai: string;
    namaJabatan: string;
    kodeOpd: string;
    statusJabatan: string;
    jenisJabatan: string;
    eselon: string;
    pangkat: string;
    golongan: string;
    basicTpp: number;
    pajak: number;
    tanggalMulai: string;
    tanggalAkhir: string | null;
    createdDate: string;
    lastModifiedDate: string;
    bulan_mulai: OptionType | null;
    tahun_mulai: OptionType | null;
    bulan_berakhir: OptionType | null;
    tahun_berakhir: OptionType | null;
}
