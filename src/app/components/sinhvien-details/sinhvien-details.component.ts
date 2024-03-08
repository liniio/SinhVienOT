import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sinhvien } from 'src/app/models/sinhvien.model';
import { SinhvienService } from 'src/app/services/sinhvien.service';

@Component({
  selector: 'app-sinhvien-details',
  templateUrl: './sinhvien-details.component.html',
  styleUrls: ['./sinhvien-details.component.css'],
})
export class SinhvienDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentSinhVien: Sinhvien = {
    maSinhVien: '',
    hoTen: '',
    gioiTinh: '',
    khoa: '',
    diemTin: '',
  };

  message = '';
  constructor(
    private sinhvienService: SinhvienService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getSinhVien(this.route.snapshot.params['id']);
    }
  }
  getSinhVien(id: string): void {
    this.sinhvienService.get(id).subscribe({
      next: (data) => {
        this.currentSinhVien = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  updateSinhVien(): void {
    this.message = '';
    this.sinhvienService
      .update(this.currentSinhVien.id, this.currentSinhVien)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e),
      });
  }
  deleteSinhVien(): void {
    this.sinhvienService.delete(this.currentSinhVien.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/sinhvienls']);
      },
      error: (e) => console.error(e),
    });
  }
}
