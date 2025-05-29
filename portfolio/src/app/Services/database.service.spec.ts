import { TestBed } from '@angular/core/testing';
import { DatabaseService } from './database.service';
import { provideHttpClient} from '@angular/common/http';

describe('TestDatabaseService', () => {
  let service: DatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [provideHttpClient()]
    });
    service = TestBed.inject(DatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
